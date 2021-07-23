from flask import Flask,render_template,request,redirect,url_for,flash
app=Flask(__name__)
button1=0
@app.route('/')
def index():
    return render_template('index.html')
if __name__ == '__main__':
    app.run(port=3000,debug=True)