import http.server
import socketserver
import os

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        if self.path.endswith(".js"):
            self.send_header('Content-Type', 'application/javascript; charset=utf-8')
        else:
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Cache-Control', 'no-store, must-revalidate')  # Add this line
        http.server.SimpleHTTPRequestHandler.end_headers(self)

PORT = 8000

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()