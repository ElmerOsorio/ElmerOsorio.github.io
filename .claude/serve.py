import functools
import http.server
import os

ROOT = "/Users/elmerosorio/Documents/GitHub/ElmerOsorio.github.io"
PORT = int(os.environ.get("PORT", 8080))
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
http.server.test(HandlerClass=handler, port=PORT, bind="127.0.0.1")
