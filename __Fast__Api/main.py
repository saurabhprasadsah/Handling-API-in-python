from typing import Union
from fastapi import FastAPI, Body
from fastapi import FastAPI
app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/rest")
def saurabh():
    return {"bunnu": "saurabh"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}



# @app.post("/items/")
# async def create_item(item: dict):
#     # Process the data in the request body
#     return {"message": f"Item created successfully with data: {item}"}


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item = Body(...)):
    # Update the item in your database or system
    # based on item_id and item data
    # ...

    return {"message": "Item updated successfully"}




import uvicorn
uvicorn.run(app)