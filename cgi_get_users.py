#! /usr/bin/python
import MySQLdb
import cgi,ast

def check_user(form):
    udata = form.getfirst('input_str')
    json_data = ast.literal_eval(udata)
    batch_id = json_data.get('batch_id','')
    conn = MySQLdb.connect('localhost','root','test123','testdb')
    curr = conn.cursor()
    curr.execute('selct * from user where batch_id = %s' %(batch_id));
    result = curr.fetchall();
    return json.dump({'data':result})
    
    
    
if __name__ == "__main__"
    form = cgi.FieldStorage()
    tmp = check_user(form)