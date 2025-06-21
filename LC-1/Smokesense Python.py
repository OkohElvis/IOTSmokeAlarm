from firebase import firebase
import serial #Imports libraries that will be used
import datetime


ser = serial.Serial("COM24" , 115200) #variable for retreiving data from serial

myDB = firebase.FirebaseApplication("https://lc-proj-72bda-default-rtdb.firebaseio.com/",None) # variable for sending data to database


def getData():
    data = ser.readline()
    data = str(data)
    data = data[2:]
    data = data.replace(" ","")
    data = data[:-5]
    x = datetime.datetime.now()
    time = x.strftime("%X")
    myDB.post("Air/",{'data':data, 'time':time})
    print(data) #Function for formatting and posting the data to the database



while True:
    getData() #loop for retreiving data
   