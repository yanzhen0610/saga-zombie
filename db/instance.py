
from utils import eprint
from db import sqlite_db_handler

def make_db_instance(configs):
    if configs['type'] == 'sqlite':
        try:
            with open(configs['path'], 'a'):
                pass
        except IOError:
            eprint('could not read or write', configs['path'])
        if 'backup' in configs:
            if 'backup_period' in configs:
                backup_period = configs['backup_period']
            else:
                backup_period = 3600
            backup = configs['backup']
            return sqlite_db_handler.SQLiteDBHandler(configs['path'], backup, backup_period)
        return sqlite_db_handler.SQLiteDBHandler(configs['path'])


def check_db_config(configs):
    if 'type' not in configs:
        eprint('database type was not set')
        exit(1)
    if configs['type'] == 'sqlite':
        if 'path' not in configs:
            eprint('sqlite path was not set')
            exit(1)
    else:
        eprint('unknown database type', configs['type'])
        exit(1)
