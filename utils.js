function generateID() {
    var guid = (function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
      }
      return function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
      };
    })()();
    print(guid)
    return guid
}

function findChild(obj,objectName) {
    var childs = new Array(0);
    childs.push(obj)
    while (childs.length > 0) {
        if (childs[0].objectName == objectName) {
            return childs[0]
        }
        for (var i in childs[0].data) {
            childs.push(childs[0].data[i])
        }
        childs.splice(0, 1);
    }
    return null;
}

function escapeHTML(html) {
    return html.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

function cherrypick(list, properties) {

    if (list instanceof Array) {
        var result = []

        for (var i = 0; i < list.length; i++) {
            var item = list[i]
            var obj = {}
            for (var j = 0; j < properties.length; j++) {
                var prop = properties[j]
                obj[prop] = item[prop]
            }

            result.push(obj)
        }

        return result
    } else {
        var obj = {}

        for (var i = 0; i < properties.length; i++) {
            var prop = properties[i]
            print(prop)
            obj[prop] = list[prop]
        }

        return obj
    }
}

function findChild(obj,objectName) {
    var childs = new Array(0);
    childs.push(obj)
    while (childs.length > 0) {
        if (childs[0].objectName == objectName) {
            return childs[0]
        }
        for (var i in childs[0].data) {
            childs.push(childs[0].data[i])
        }
        childs.splice(0, 1);
    }
    return null;
}

function newObject(path, args, parent) {
    if (!args)
        args = {}

    args.parent = parent

    var component = Qt.createComponent(path);
    if (component.status == Component.Error) {
        // Error Handling
        print("Unable to load object: " + path + "\n" + component.errorString())
    }

    return component.createObject(parent, args);
}
