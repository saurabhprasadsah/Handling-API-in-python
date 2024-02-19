import requests
def fetch_random_freeapi():
    url = "https://api.freeapi.app/api/v1/public/randomusers/user/random"
    response = requests.get(url)
    data = response.json()
    if data["success"] and "data" in data:
        user_data = data["data"]
        username = user_data["login"]["username"]
        country = user_data["dob"]["age"]
        return username, country
    else:
        raise Exception("failes to fetch user data")


def main():
    try:
        username, country = fetch_random_freeapi()
        print(f"Username: {username} \n Country: {country}")
    except Exception as e:
        print(str(e))


if __name__ == "__main__":
    main()
