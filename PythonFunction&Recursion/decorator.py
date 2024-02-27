# print("Decorator function in python")

import time

def timer(func):
    def wrapper(*args,  **kawargs):
       start = time.time()
       result = func(*args,  **kawargs)
       end = time.time()
       print(f"{func.__name__} ran in {end-start} time")
       return result
    return wrapper


@timer
def example_function(n):
    time.sleep(n)

example_function(5)