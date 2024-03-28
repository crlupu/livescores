import json
import requests

def send_requests_save_data(url_template, id_list, filename, headers):
    """
    Sends HTTP GET requests for each ID in a list, saves responses as a JSON array to a file.

    Args:
        url_template (str): The URL template with a placeholder for the ID (e.g., "https://api.example.com/teams/{}").
        id_list (list): A list of IDs for which to make requests.
        filename (str): The filename to save the team data.
    """
    team_data = []  # Initialize an empty list to store team data

    for team_id in id_list:
        url = url_template.format(team_id)  # Format URL with the ID
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            team_data.append(response.json())  # Add team data to the list
        else:
            print(f"Error retrieving data for ID {team_id}: {response.status_code}")

    with open(filename, "w") as outfile:
        json.dump(team_data, outfile)  # Dump the entire list (JSON array) to the file

# Example usage
url_template = "https://sport-highlights-api.p.rapidapi.com/football/teams/{}"  # Replace with your actual URL
id_list = [341184, 2194662, 650948, 14032923, 178643, 1367490, 176090, 2969072, 1364937, 13820173, 170984, 12393046, 1908726, 357353, 168431, 5916085, 538616, 352247, 165878, 354800, 291826, 1850858, 5700782, 541169, 349694, 318207, 5860770, 320760, 5921191, 2197215, 8144003]
filename = "new-teams.json"

headers = {
    "X-RapidAPI-Key": "94dfaad682msh6e6cd270a0b6cbcp19e5c3jsnd28b24a0bb4a",  # Replace with your actual authorization token
    "X-RapidAPI-Host": "sport-highlights-api.p.rapidapi.com"  # Example header, adjust as needed
}

send_requests_save_data(url_template, id_list, filename, headers)

print(f"Team data saved to: {filename}")