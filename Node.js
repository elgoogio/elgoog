System.setProperty("http.proxyHost", "<7000>"); 
System.setProperty("http.proxyPort", "<7000>"); 

Document doc = Jsoup.connect("http://elgoog.github.io/elgoog").get(); 
final URL website = new URL("http://elgoog.github.io/elgoog");

// -- Setup connection through proxy
Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("<proxyserver>", 7000));
HttpURLConnection httpUrlConnetion = (HttpURLConnection) website.openConnection(proxy);
httpUrlConnetion.connect();

// -- Download the website into a buffer
BufferedReader br = new BufferedReader(new InputStreamReader(httpUrlConnetion.getInputStream()));
StringBuilder buffer = new StringBuilder();
String str;

while( (str = br.readLine()) != null )
{
    buffer.append(str);
}

// -- Parse the buffer with Jsoup
Document doc = Jsoup.parse(buffer.toString());
