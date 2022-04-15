import mysql.connector
import boto3
import pandas as pd
from trycourier import Courier
import time

# gotta delete these keys prior to upload
mydb = mysql.connector.connect(
    host="",
    user="",
    password="",
    database=""
)

s3 = boto3.resource(
    service_name='',
    region_name='',
    aws_access_key_id='',
    aws_secret_access_key=''
)


def scanForCSV():
    for obj in s3.Bucket('').objects.all():
        if str(obj.key)[-4:] == '.csv':
            return str(obj.key)


def downloadCSV(fn):
    csv = s3.Bucket(
        '').Object(fn).get()
    df = pd.read_csv(csv['Body'])
    return fn, list(df.columns), df.values.tolist()


def csvToDB(name, cols, vals):
    # generate cols for create statement
    cmdinp = []
    for i in range(len(cols)):
        if str(type(vals[0][i]))[8:11] == 'int':
            cmdinp.append(cols[i] + " INT(255)")
        elif str(type(vals[0][i]))[8:11] == 'str':
            cmdinp.append(cols[i] + " VARCHAR(255)")
        else:
            cmdinp.append(cols[i] + " DECIMAL(30, 4)")

    # create table
    sqlcmd = "CREATE TABLE IF NOT EXISTS " + name[:-4] + "("
    j = 0
    for i in cmdinp:
        if j == len(cmdinp) - 1:
            sqlcmd = sqlcmd + i
        else:
            sqlcmd = sqlcmd + i + ", "
        j = j+1
    sqlcmd = sqlcmd + ")"
    mycursor = mydb.cursor()
    mycursor.execute(sqlcmd)
    mycursor.close()

    # insert statement
    valueamt = " VALUES ("
    for i in range(len(cols)):
        if i == len(cols) - 1:
            valueamt = valueamt + "%s)"
        else:
            valueamt = valueamt + "%s, "

    insertcmd = "INSERT INTO " + name[:-4] + valueamt
    mycursor = mydb.cursor()
    mycursor.executemany(insertcmd, vals)
    mydb.commit()
    mycursor.close()


def notifyTeam(fn, recp):
    client = Courier(auth_token="")

    resp = client.send(
        event="courier-quickstart",
        recipient=recp,
        brand="",
        data={
            "filename": fn
        },
        profile={
            "email": recp
        }
    )


def deleteCSV(name):
    s3.Object(
        '', name).delete()


while 1:
    csv = scanForCSV()
    if csv:
        name, cols, vals = downloadCSV(csv)
        print("working on csv:", name)
        csvToDB(name, cols, vals)
        notifyTeam(name, "testingtesting@fakeemail.com")
        deleteCSV(name)
    time.sleep(1)
