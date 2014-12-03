import urllib2, time

while True:
	response = urllib2.urlopen('http://icah.org.uk/opensesame/status.txt').read()

	if response=="on":
		print "Someone's at the door"

	time.sleep(1)

