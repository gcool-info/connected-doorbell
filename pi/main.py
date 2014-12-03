# Basic imports 
import urllib2, time, pygame, os, sys

# Set up sound
pygame.mixer.init()
pygame.mixer.music.load("audio.mp3")

# Check how many times we have tried to connect to the internet
connection_attempts = 0

# HTTP request function (with exceptions)
def http_request(url):
	try:
		response = urllib2.urlopen(url)
		return response.read()
	except urllib2.URLError as err: pass
	return False

# Check if the internet / wifi is working by connecting to a google server
while not http_request("http://74.125.228.100"):

	global connection_attempts

	# Restart the wifi after two attempts
	if connection_attempts > 2:
		os.system("sudo ifup --force wlan0")
		
	# Increment the connection attempts
	connection_attempts = connection_attempts + 1

	# Print status message
	print "Internet is down. Re-trying in 60s"
	time.sleep(60)

print "Wi-Fi is on!"

# Reset the connection attemps counter
connection_attempts = 0


# Loop
while True:
	response = http_request("http://icah.org.uk/opensesame/status.txt")

	if response=="on":
		# Play the sound
		pygame.mixer.music.play()
		while pygame.mixer.music.get_busy() == True:
			continue

		# Print status message
		print "Someone's at the door"

		# Update the web / turn off the alarm
		http_request("http://icah.org.uk/opensesame/ajax.php?cmd=turn_off")
		
	time.sleep(5)

