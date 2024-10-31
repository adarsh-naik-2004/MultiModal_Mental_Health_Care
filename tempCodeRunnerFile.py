from flask import Flask, render_template, redirect, url_for
from flask_mysqldb import MySQL


app = Flask(__name__)
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='adarshnaik@2004'
app.config['MYSQL_DB']='mentalhealth'
mysql=MySQL(app)

@app.route('/')
def home():
    cur=mysql.connection.cursor()
    cur.execute('SELECT * FROM user ')
    data=cur.fetchall()
    cur.close()
    return str(data)



if __name__ == '__main__':
    app.run(debug=True)
