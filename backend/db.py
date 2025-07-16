import mysql.connector
from config import DB_CONFIG

def get_db_connection():
    return  mysql.connector.connect(
        host='localhost',
        user='root',
        password='',
        database='dnd_database',
        auth_plugin='mysql_native_password'
    )

