import json
import requests

def send_requests_save_data(url_template, filename, headers):
    """
    Sends HTTP GET requests for each ID in a list, saves responses as a JSON array to a file.

    Args:
        url_template (str): The URL template with a placeholder for the ID (e.g., "https://api.example.com/teams/{}").
        id_list (list): A list of IDs for which to make requests.
        filename (str): The filename to save the team data.
    """
    highlights_data = []  # Initialize an empty list to store team data
    offset = 40
    while offset < 407:
        url = url_template.format(offset)  # Format URL with the ID
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            highlights_data.append(response.json()['data'])  # Add team data to the list
        else:
            print(f"Error retrieving data for offset {offset}: {response.status_code}")

        offset += 40

    with open(filename, "w") as outfile:
        json.dump(highlights_data, outfile)  # Dump the entire list (JSON array) to the file

# Example usage
url_template = "https://sport-highlights-api.p.rapidapi.com/football/highlights?leagueId=97798&season=2023&offset={}"  # Replace with your actual URL
filename = "new-highlights.json"

headers = {
    "X-RapidAPI-Key": "a1c2d92eefmsh3dbe29d9f221ff5p1bd9e0jsn5f96a6a0a50b",  # Replace with your actual authorization token
    "X-RapidAPI-Host": "sport-highlights-api.p.rapidapi.com"  # Example header, adjust as needed
}

send_requests_save_data(url_template, filename, headers)

print(f"Highlights data saved to: {filename}")