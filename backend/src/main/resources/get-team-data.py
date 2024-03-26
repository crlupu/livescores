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
id_list = [35675, 63758, 51844, 57801, 50993, 48440, 50142, 60354, 55248, 61205, 32271, 1155591, 62907, 64609, 46738, 65460, 62056, 33122, 1146230, 39930, 37377, 54397, 49291, 635630, 60354, 1146230, 54397, 46738, 62056, 37377, 39930, 32271, 63758, 55248, 64609, 49291, 48440, 50142, 635630, 50993, 57801, 62907, 61205, 35675, 1155591, 33122, 65460, 51844, 51844, 54397, 35675, 1155591, 55248, 57801, 46738, 48440, 37377, 39930, 32271, 60354, 49291, 62056, 50993, 63758, 33122, 64609, 62907, 635630, 1146230, 65460, 50142, 61205, 48440, 55248, 1155591, 46738, 63758, 37377, 635630, 1146230, 61205, 32271, 54397, 49291, 64609, 50142, 65460, 50993, 39930, 62907, 62056, 35675, 57801, 33122, 60354, 51844, 50142, 46738, 33122, 1146230, 37377, 49291, 63758, 54397, 55248, 39930, 62056, 60354, 57801, 1155591, 61205, 62907, 50993, 64609, 35675, 635630, 48440, 65460, 32271, 51844, 1146230, 55248, 60354, 57801, 51844, 48440, 65460, 37377, 62907, 32271, 54397, 50142, 64609, 61205, 1155591, 50993, 635630, 62056, 49291, 63758, 39930, 35675, 46738, 33122, 1155591, 48440, 1146230, 37377, 46738, 50993, 65460, 62056, 60354, 63758, 49291, 35675, 635630, 57801, 64609, 32271, 54397, 55248, 62907, 50142, 39930, 61205, 51844, 33122, 62056, 46738, 32271, 1146230, 57801, 49291, 33122, 54397, 48440, 39930, 35675, 60354, 61205, 1155591, 50993, 62907, 55248, 64609, 37377, 635630, 63758, 65460, 50142, 51844, 39930, 57801, 64609, 48440, 62907, 37377, 49291, 32271]  # Replace with your list of IDs
filename = "teams.json"

headers = {
    "X-RapidAPI-Key": "94dfaad682msh6e6cd270a0b6cbcp19e5c3jsnd28b24a0bb4a",  # Replace with your actual authorization token
    "X-RapidAPI-Host": "sport-highlights-api.p.rapidapi.com"  # Example header, adjust as needed
}

send_requests_save_data(url_template, id_list, filename, headers)

print(f"Team data saved to: {filename}")