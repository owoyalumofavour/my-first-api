from fastapi import FastAPI

#create an instance of the fastapi classs
app=FastAPI()

# define a route for the root path using the GET method
@app.get("/")
async def read_root():
    # returns a dictionary,the api converts it to json
    return{"msg":"hello"}