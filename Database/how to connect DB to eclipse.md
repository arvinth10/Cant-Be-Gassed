1. Download Eclipse Java EE as we are developing web application so we do not use SE
[download Eclipse Oxygen](http://www.eclipse.org/downloads/eclipse-packages/)

2. set work_place to your project

3. at eclipse window, select "help" -> "MarketPlace" and type " AWS Toolkit" then install it
[instruction from AWS](https://aws.amazon.com/jp/blogs/developer/connecting-to-amazon-rds-databases-from-eclipse/)

4. restart eclipse

5. enter access key ID and secret access Key

6. choose DB ...

7. create a hibernate folder inside of your project (any name is fine as long as that folder is only for hibernate file)
[instruction for hibernate in eclipse](http://www.javawebtutor.com/articles/hibernate/hibernate_example_in_eclipse.php)

8. download jar file for hibernate and place those files inside of hibernate folder
  antlr-2.7.6 [link](http://www.java2s.com/Code/Jar/a/Downloadantlr276jar.htm)<br />
  commons-collections-3.1 [link](http://www.java2s.com/Code/Jar/a/Downloadapachecollectionscommonscollections31jar.htm)<br />
  dom4j-1.6.1 [link](http://www.java2s.com/Code/Jar/d/Downloaddom4j16jar.htm)<br />
  hibernate3 [link](http://www.java2s.com/Code/Jar/h/Downloadhibernate3jar.htm)<br />
  javassist-3.4.GA [link](http://www.java2s.com/Code/Jar/j/Downloadjavassist34gajar.htm)<br />
  jta-1.1 [link](http://www.java2s.com/Code/Jar/j/Downloadjta11jar.htm)<br />
  slf4j-api-1.5.6 [link](http://www.java2s.com/Code/Jar/s/Downloadslf4japi156jar.htm)<br />
  slf4j-simple-1.5.6 [link](http://www.java2s.com/Code/Jar/s/Downloadslf4jsimple156jar.htm)<br />
  mysql -- if we use Maven, we can add dependency from [here](http://mvnrepository.com/artifact/mysql/mysql-connector-java) otherwise
           download it from [here](https://dev.mysql.com/downloads/connector/j/)<br />
  
  9.then create persistence class for hibernate and so on .. follow the instruction from [here](http://www.javawebtutor.com/articles/hibernate/hibernate_example_in_eclipse.php)

