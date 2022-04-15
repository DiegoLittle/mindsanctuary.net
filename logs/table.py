import json
from bs4 import BeautifulSoup
import sys
import re
import csv
from matplotlib.font_manager import json_load
import requests

questions = []
with open('test.html', 'r') as f:

    contents = f.read()

    soup = BeautifulSoup(contents, 'html.parser')
    
    for row in soup.findAll('tr'):
        try:
            question = {
                "id": questions.__len__(),
                "question":row.findAll('td')[1].p.text,
                "key":row.findAll('td')[7].p.text.replace("(","").replace(")","").replace(" ",""),
                "choice":{},
                "answers":[
                                    {
                                        "title":"Very Accurate",
                                        "value":5
                                    },
                                    {
                                        "title":"Moderately Accurate",
                                        "value":4
                                    },
                                    {
                                        "title":"Neither Accurate Nor Inaccurate",
                                        "value":3
                                    },
                                    {
                                        "title":"Moderately Inaccurate",
                                        "value":2
                                    },
                                    {
                                        "title":"Very Inccurate",
                                        "value":1
                                    },
                                ]  
            }
            questions.append(question)
            print(question)
            print()
            
        except:
            continue
with open("test.json",'w') as f:

    f.write(json.dumps(questions))

# print(soup)
# for i in soup:
#     print(i.string)
# print()
# print(soup.find_all('table'))
# for row in soup.find_all('table'):
#     print(row)
#         # col = map(cell_text, row.find_all(re.compile('t[dh]')))