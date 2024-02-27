# # print("Decorator function in python")

# import time
# def timer(func):
#     def wrapper(*args,  **kawargs):
#        start = time.time()
#        result = func(*args,  **kawargs)
#        end = time.time()
#        print(f"{func.__name__} ran in {end-start} time")
#        return result
#     return wrapper

# @timer
# def example_function(n):
#     time.sleep(n)

# example_function(5)


def debug(func):
    def wrapper(*args ,**kwargs):
        return func( *args , **kwargs )


    return wrapper

def hello():
    print("Hello wolrd")


def greet(name, greeting="Hello"):
    print(f"{greeting} {name}")

greet("chai or Coffee", greeting="HanjiLekrAuo ")










