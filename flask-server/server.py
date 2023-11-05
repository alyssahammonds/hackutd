from flask import Flask

app = Flask(__name__)

# Members API route

@app.route("/model")
def model():
    return {"eps": 5.5}

if __name__ == "__main__":
    app.run(debug=True)