#! /usr/bin/python
import MySQLdb
import cgi,ast

def check_user(form):
    udata = form.getfirst('input_str')
    json_data = ast.literal_eval(udata)
    username = json_data.get('username','')
    password = json_data.get('password','')
    conn = MySQLdb.connect('localhost','root','test123','testdb')
    curr = conn.cursor()
    curr.execute('selct id from user where uname = %s and password = %s' %(username,password));
    result = curr.fetchone();
    no_of_record = result[0]
    if no_of_record:
        return json.dump({'data':'success'})
    else:
        return json.dump({'data':'Wrong'})
    
    
    
if __name__ == "__main__"
    form = cgi.FieldStorage()
    tmp = check_user(form)