import './PostPage.css'

function CakephpForeignKey() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Handle CakePHP Foreign Key Constraint Errors Gracefully</h1>
        <time>Oct 15, 2019</time>

        <p>
          If you've defined your Model associations at the database level (added foreign key 
          indexes), you might hit this error when deleting records:
        </p>

        <pre><code>{`SQLSTATE[23000]: INTEGRITY CONSTRAINT VIOLATION: 1451 
CANNOT DELETE OR UPDATE A PARENT ROW: A FOREIGN KEY CONSTRAINT FAILS`}</code></pre>

        <p>
          You'll want to catch that exception and display it nicely for your users.
        </p>

        <h2>The Solution</h2>
        <p>
          Add this method to <code>AppModel.php</code>. It checks for linked records before 
          deleting and throws a friendly exception:
        </p>

        <pre><code>{`public function beforeDelete($cascade = true) {
  $canDelete = true;
  foreach ($this->hasMany as $model => $details) {
    if ($details['dependent'] !== true) {
      if ($details['className'] == $this->name) {
        $ModelInstance = $this;
      } else {
        $ModelInstance = $this->{$details['className']};
      }
      $count = $ModelInstance->find("count", array(
        "conditions" => array($details['foreignKey'] => $this->id)
      ));
      if ($count) {
        throw new Exception(sprintf(
          "There are %s linked to this record.", 
          strtolower(Inflector::humanize(Inflector::tableize($model)))
        ));
      }
      if ($count > 0) {
        $canDelete = false;
      }
    }
  }

  return $canDelete;
}`}</code></pre>

        <h2>Using It in Your Controller</h2>
        <pre><code>{`try {
  if ($this->MyModel->delete()) {
    $this->Session->setFlash('Record deleted', 'default', array(), 'good');
  } else {
    $this->Session->setFlash('Record was not deleted. Unknown error.', 'default', array(), 'bad');
  }
} catch (Exception $e) {
  $this->Session->setFlash("Delete failed. {$e->getMessage()}", 'default', array(), 'bad');
}
return $this->redirect(array('action' => 'index'));`}</code></pre>

        <p>
          Now instead of a cryptic database error, users see something like: 
          "There are items linked to this record."
        </p>
      </article>
    </main>
  )
}

export default CakephpForeignKey