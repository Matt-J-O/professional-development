import json

with open("D:\Professional_Development\React\marvel_grid\database.json","r") as n:
    data = json.load(n)

counter = 0
for i in data:
    if "Name" in i:
        i["id"] = counter
        counter += 1

with open("D:\Professional_Development\React\marvel_grid\database.json", "w") as outfile:
    json.dump(data, outfile)
