#! /usr/bin/python
import cgi,ast
from os

def check_user(form):
    udata = form.getfirst('input_str')
    json_data = ast.literal_eval(udata)
    folder_path = json_data.get('path','')
    list_files = os.listdir(folder_path)
    return json.dump({'data':list_files})
    
    
    
if __name__ == "__main__"
    form = cgi.FieldStorage()
    tmp = check_user(form)