#!/bin/python3

# https://firebase.google.com/docs/firestore/quickstart

"""
INPUT:

{
    "tag_name": [
        {BLOB_1},
        {BLOB_2}
    ]
}

OUTPUT:

{
    "data": [
        {
            "id": "xxx",
            "tag": "tag_name",
            "data": {
                BLOB_1
            }
        },
        {
            "id": "xxy",
            "tag": "tag_name",
            "data": {
                BLOB_2
            }
        }
    ]
}
"""

from pprint import pprint
import json

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore



# Use a service account
cred = credentials.Certificate('serviceAccount.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

question_data = None

with open('questions.json') as f:
    question_data = json.load(f)

output_data = {}
output_data_elements = []
id_counter = 1000

# tag: string, tag_elements: array of dicts
for tag, tag_elements in question_data.items():

    for tag_element in tag_elements:
        #pprint(tag_element)
        output_data_elements.append(
            {"id": str(id_counter),
            "tag": tag,
            "data": tag_element}
        )
        id_counter += 1

output_data["data"] = output_data_elements

pprint(output_data)

doc_ref = db.collection(u'static').document(u'questions')
doc_ref.set(output_data)
