from boto3 import resource
from boto3.dynamodb.conditions import Key


dynamodb_resource = resource('dynamodb')
table_name='EOOMT' 

def lambda_handler(event,):
    key="pk"
    value='task'
    table = dynamodb_resource.Table("table_name")
    if key is not None and value is not None:
      filtering_exp = Key(key).eq(value)
      resp= table.query(KeyConditionExpression=filtering_exp)
      tasks=[]    
      items = resp.get('Items')
      print(len(items))
      
      for i in items:
          tasks.append(i['sk'].split("#")[0])
      tasks=list(set(tasks))
      return tasks