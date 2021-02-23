let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  console.log(1);
  request.open("GET", `page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      console.log(array);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
      console.log(object);
    }
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      // 不知道成功页面下载完了 2xx 还是吧失败页面下载完了 4xx
      if (request.status >= 200 && request.status <= 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.body.appendChild(style);
      } else {
        alert("css加载失败");
      }
    }
  };
  request.open("GET", "style.css"); // readystate = 1
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("请求失败");
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("请求失败");
  };
  request.send();
};
