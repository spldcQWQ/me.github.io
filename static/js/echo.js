function showRandomNote() {
    // 读取记事本文件数据
    fetch('D:\下载\MC服务器官网源码\static\js\notes.txt\notes.txt')
      .then(response => response.text())
      .then(data => {
        // 将文件数据拆分成数组
        const notes = data.trim().split('\n');
        // 生成随机数来选择带有笔记的字符串
        const randomIndex = Math.floor(Math.random() * notes.length);
        const noteText = notes[randomIndex];
        // 显示选定的字符串
        document.getElementById("note-text").textContent = noteText;
      })
      .catch(error => console.log(error));
  }
  