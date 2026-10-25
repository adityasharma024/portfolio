"""Visitor counter Lambda: atomically increments a DynamoDB counter."""
import json
import os

import boto3

_table = None


def get_table():
    global _table
    if _table is None:
        _table = boto3.resource("dynamodb").Table(os.environ["TABLE_NAME"])
    return _table


def handler(event, context):
    resp = get_table().update_item(
        Key={"pk": "visits"},
        UpdateExpression="ADD hits :one",
        ExpressionAttributeValues={":one": 1},
        ReturnValues="UPDATED_NEW",
    )
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json", "Cache-Control": "no-store"},
        "body": json.dumps({"count": int(resp["Attributes"]["hits"])}),
    }
