import requests
def Stcks_Api():
    url = "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches"
    response = requests.get(url)
    data = response.json()

    if data["success"] and "data" in data:
        user_data = data["data"]
        username = user_data["data"]["page"]
        country = user_data["data"]["limit"]
        return username, country
    else:
        raise Exception("failes to fetch user data")


def main():
    try:
        username, country = Stcks_Api()
        print(f"Username: {username} \n Country: {country}")
    except Exception as e:
        print(str(e))


if __name__ == "__main__":
    main()
