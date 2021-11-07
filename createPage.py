seperator = "<!-- START OF CONTENT -->"
endSeperator = "<!-- END OF CONTENT -->"

bodyPath = input("Enter path to body html: ")
templatePath = input("Enter path to template file: ")
outputName = input("What to call output file: ")

outputName += ".html"

with open(bodyPath) as b, open(templatePath) as t:
    body = b.read()
    template = t.read()

    templateIndex = template.index(seperator)
    templateEndIndex = template.index(endSeperator)
    
    newFile = template[:templateIndex] + "\n" + seperator + "\n" + body + "\n" + template[templateEndIndex:]

with open(outputName, "w") as o:
    o.write(newFile)
