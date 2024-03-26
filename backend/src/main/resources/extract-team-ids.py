import json

def extract_team_ids(data):
    """
    Extracts list of team IDs from awayTeam and homeTeam in each object of a JSON array.

    Args:
        json_data (str): The JSON string containing the array of objects.

    Returns:
        list: A list containing all extracted team IDs.
    """
    team_ids = []

    # Check if data is an array (handle single object or invalid data gracefully)
    if not isinstance(data, list):
        print("Error: Invalid JSON format. Expected an array of objects.")
        return team_ids

    # Iterate through each object in the data
    for match in data:
        if "awayTeam" in match and "homeTeam" in match:
            # Extract IDs from both teams if present
            team_ids.append(match["awayTeam"]["id"])
            team_ids.append(match["homeTeam"]["id"])
        else:
            print(f"Warning: Match object missing awayTeam or homeTeam: {match}")

    return team_ids

with open("matches.json", "r") as file:
    json_string = json.load(file)
    team_ids = extract_team_ids(json_string)
    print(f"Extracted team IDs: {team_ids}")

# Print or process the extracted team IDs