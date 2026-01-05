import './PostPage.css'

function CakephpEmailTesting() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>How to Unit Test CakePHP Email Without Actually Sending Emails</h1>
        <time>Sep 25, 2019</time>

        <p>
          When unit testing a CakePHP controller that sends emails, you'll hit this error 
          on your local machine:
        </p>

        <pre><code>{`SocketException: Could not send email.`}</code></pre>

        <p>
          The problem is you can't send emails from your local machine. The solution? 
          Design your code to be testable using dependency injection.
        </p>

        <h2>The Problem Code</h2>
        <p>This looks harmless but can't be mocked:</p>

        <pre><code>{`App::uses('CakeEmail', 'Network/Email');
App::uses('AppController', 'Controller');

class UsersController extends AppController {

  public function register() {
    // registration logic
    $email = new CakeEmail();
    $email->from(array('site@example.com' => 'Site'));
    $email->to('you@example.com');
    $email->subject('Registered');
    $email->send('Thanks for registering!');
  }

}`}</code></pre>

        <h2>The Solution: Add a Helper Method</h2>
        <p>
          The CakeEmail class should be instantiated in a way that allows us to change it later:
        </p>

        <pre><code>{`App::uses('CakeEmail', 'Network/Email');
App::uses('AppController', 'Controller');

class UsersController extends AppController {

  public function register() {
    // registration logic
    $email = $this->_getEmailer();
    $email->from(array('site@example.com' => 'Site'));
    $email->to('you@example.com');
    $email->subject('Registered');
    $email->send('Thanks for registering!');
  }

  public function _getEmailer() {
    return new CakeEmail();
  }

}`}</code></pre>

        <h2>The Test</h2>
        <p>Now we can mock the helper function and use DebugTransport:</p>

        <pre><code>{`App::uses('CakeEmail', 'Network/Email');
App::uses('UsersController', 'Controller');

class UsersControllerTest extends ControllerTestCase {

  public function testRegister() {
    $controller = $this->generate('Users', array(
      'methods' => array(
        '_getEmailer'
      )
    ));
    $emailer = new CakeEmail();
    $emailer->transport('Debug');
    $controller
      ->expects($this->any())
      ->method('_getEmailer')
      ->will($this->returnValue($emailer));
  }

}`}</code></pre>

        <p>
          Since <code>$emailer</code> has the transport set to 'Debug', it's safe for testing. 
          The key lesson: design for testability using dependency injection.
        </p>
      </article>
    </main>
  )
}

export default CakephpEmailTesting