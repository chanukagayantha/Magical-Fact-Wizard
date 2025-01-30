# import http.server
# import socketserver
# import webbrowser
# import threading

# PORT = 8000

# # Start a simple HTTP server
# class CustomHandler(http.server.SimpleHTTPRequestHandler):
#     def end_headers(self):
#         self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
#         self.send_header('Pragma', 'no-cache')
#         self.send_header('Expires', '0')
#         super().end_headers()

# def start_server():
#     with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
#         print(f"Serving at http://localhost:{PORT}")
#         httpd.serve_forever()

# # Open the browser automatically
# def open_browser():
#     webbrowser.open(f"http://localhost:{PORT}/index.html")

# # Run the server in a separate thread so it doesn't block the browser opening
# threading.Thread(target=start_server, daemon=True).start()
# open_browser()

# # Keep script running
# input("Press Enter to exit...\n")


import http.server
import socketserver
import webbrowser
import threading
import os
import sys

PORT = 8000

# Get the directory of the EXE or script
if getattr(sys, 'frozen', False):
    BASE_DIR = os.path.dirname(sys.executable)  # When running as an EXE
else:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # When running as a script

# Change working directory to serve files correctly
os.chdir(BASE_DIR)

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def start_server():
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        httpd.serve_forever()

# Open the browser automatically
def open_browser():
    webbrowser.open(f"http://localhost:{PORT}/index.html")

# Run the server in a separate thread so it doesn't block the browser opening
threading.Thread(target=start_server, daemon=True).start()
open_browser()

# Keep script running
input("Press Enter to exit...\n")