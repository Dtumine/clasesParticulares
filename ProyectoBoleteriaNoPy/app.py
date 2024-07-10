from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home(): 
    return render_template('index.html')

@app.route('/home')
def home2():
    return render_template('index.html') 

@app.route('/comprar_tickets')   
def comprar_tickets():
    return render_template('buy2.html') 

@app.route('/ver_ubicaciones') 
def ver_ubicaciones(): 
    return render_template('tickets2.html')  

if __name__ == "__main__":
    app.run(host='192.168.100.19', port=5000) # abrimos la cmd y colocamos ipconfig
  
  
