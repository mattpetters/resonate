import json
import csv
with open('historicalMinWages.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    result = {}
    for row in reader:	
    	thisEntry = {}
    	thisEntry["nominal"] = row["Nominal Min Wage"]
    	thisEntry["adjusted_2015"] = 1.04 * float(row["Minimum Wage in 2012 Dollars"][1:])
    	result[row["Year"]] = thisEntry
    print(result)