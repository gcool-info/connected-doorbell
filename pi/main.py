import urllib2, time, pygame, os, sys

pygame.mixer.init()
pygame.mixer.music.load("audio.mp3")

#check if internet is running
connection_attempts = 0
def internet_on():
	try:
		response = urllib2.urlopen("http://74.125.228.100", timeout=1)
		return True
	except urllib2.URLError as err: pass
	return False

while not internet_on():

	global connection_attempts
	if connection_attempts > 2:
		os.system("sudo ifup --force wlan0")
		
	connection_attempts = connection_attempts + 1
	print "Internet is down. Re-trying in 60s"
	time.sleep(60)

print "Wi-Fi is on!"

while True:
	response = urllib2.urlopen('http://icah.org.uk/opensesame/status.txt').read()

	if response=="on":
		pygame.mixer.music.play()
		while pygame.mixer.music.get_busy() == True:
			continue

		print "Someone's at the door"

	time.sleep(1)

