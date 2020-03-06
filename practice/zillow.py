#!/usr/bin/python2

import urllib2

# TODO command line input
# TODO format inputs into something url friendly

zws_id          = ''
address         = '3141+Bigelow+Ave'
citystatezip    = ''

# practice space for zillow api
with open('../.api_id.private') as api_ids:
    for line in api_ids:
        zws_id = line


""" Sample urllib2 call
response = urllib2.urlopen('https://python.org/')
html = response.read()

print response, html
"""

# cant use an xml parser without subjecting computers to security vulnerabilities
# have to write a simple xml parser

""" Sample API Call
Below is an example of calling the API for the address for the exact address match 
"2114 Bigelow Ave", "Seattle, WA": 

http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA

broken down: 

https://www.zillow.com/webservice/GetSearchResults.htm
?zws-id=<ZWSID>
&address=2114+Bigelow+Ave
&citystatezip=Seattle%2C+WA
"""
