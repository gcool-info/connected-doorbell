# Basic imports 
import urllib2, time, pygame, os, sys

# Set up sound
pygame.mixer.init()
pygame.mixer.music.load("audio.mp3")
pygame.mixer.music.set_volume(1)
#os.system("amixer set PCM -- 100%")

# Check how many times we have tried to connect to the internet
connection_attempts = 0

# HTTP request function (with exceptions)
def http_request(url):
	try:
		response = urllib2.urlopen(url)
		return response.read()
	except Exception:
		return False

# Check if the internet / wifi is working by connecting to a google server
while not http_request("http://74.125.228.100"):

	global connection_attempts

	# Restart the wifi after two attempts
	if connection_attempts > 2 and connection_attempts < 5:
		os.system("sudo ifup --force wlan0")
	elif connection_attempts >= 5:
		# Something is really wrong, we need to reboot
		ios.system("sudo reboot")
		
	# Increment the connection attempts
	connection_attempts = connection_attempts + 1

	# Print status message
	print "Internet is down. Re-trying in 60s"
	time.sleep(120)

print "Wi-Fi is on!"

# Reset the connection attemps counter
connection_attempts = 0


# Loop
while True:
	response = http_request("http://icah.org.uk/opensesame/status.txt")

	# If we've been trying to connect for a long time (2 mins), reboot
	if connection_attempts > 120:
		os.system("sudo reboot")

	if response=="on":
		# Play the sound
		pygame.mixer.music.play()
		while pygame.mixer.music.get_busy() == True:
			continue

		# Print status message
		print "Someone's at the door"

		# Update the web / turn off the alarm
		http_request("http://icah.org.uk/opensesame/ajax.php?cmd=turn_off")

		# Reset the connection attemps counter
		connection_attempts = 0
		
	elif response==False:
		# Update the connection attempts counter
		connection_attempts = connection_attempts + 1

	time.sleep(1)

