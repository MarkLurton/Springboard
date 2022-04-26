describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a server to serverTbody on the DOM', function() {
    submitServerInfo();
    expect(serverTbody.childElementCount).toBe(1);
  });

  it('should have a child elements for the server name and their earnings', function() {
    submitServerInfo();
    updateServerTable();
    expect(serverTbody.firstChild.childElementCount).toBe(3);
    expect(serverTbody.firstChild.firstChild.innerText).toBe('Alice');
    expect(serverTbody.firstChild.firstChild.nextSibling.innerText).toBe('$0.00');
  })

  afterEach(function() {
    allServers = {};
    serverId = 0;
    while (serverTbody.hasChildNodes()) {
      serverTbody.removeChild(serverTbody.firstChild)
    }
  });
});
