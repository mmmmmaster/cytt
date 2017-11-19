# coding=utf-8
__author__ = "liujie@waqu.com"
__date__ = "2017/2017/10/31 18:41"
from tornado.web import Application, RequestHandler,StaticFileHandler
from tornado.ioloop import IOLoop
from tornado.options import options,parse_command_line
import sys,os
options.define("port",8080,int)

parse_command_line()

class TestHandler(RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    def initialize(self, *args, **kwargs):
        print "ini", args, kwargs
    def options(self, *args, **kwargs):
        print "options"
    def prepare(self, *args, **kwargs):
        print args, kwargs
    def get(self, *args, **kwargs):
        #self.set_header("Server", "liujie")
        self.render("index.html")


def run():
    settings = {"debug": True,"template_path":os.path.join(os.path.dirname(os.path.abspath(__file__)),"templates")}
    handlers = [(r"/", TestHandler, {'b': 4,'f':6},67),(r"/(img/.*|js.*|css.*)", StaticFileHandler, {"path": settings["template_path"]}),]
    #settings = {"debug": True,"template_path":os.path.join(os.path.dirname(os.path.abspath(__file__)),"templates")}
    app = Application(handlers, **settings)
    app.listen(options.port)
    print "start %s"%options.port
    IOLoop.instance().start()


run()
