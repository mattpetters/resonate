import json

with open('raising_min_wage.json') as data_file:    
    data = json.load(data_file)

result = {}
for key in data:
	thisEntry = data[key]
	if not thisEntry['category'] in result:
		result[thisEntry['category']] = {}
	result[thisEntry['category']][key] = thisEntry
print result