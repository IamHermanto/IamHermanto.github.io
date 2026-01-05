import './PostPage.css'

function CakephpJoins() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>DRY CakePHP Joins - A Helper Method for Readable Multi-Table Joins</h1>
        <time>Sep 20, 2019</time>

        <p>
          Sometimes in CakePHP, you need to ditch the Containable behaviour and use raw joins. 
          The problem is specifying joins across multiple tables gets verbose and repetitive. 
          Here's a method for your AppModel to keep joins brief and readable.
        </p>

        <h2>The Solution</h2>
        <p>Add this method to your <code>AppModel.php</code>:</p>

        <pre><code>{`public function joinArray($joins, $type = 'LEFT') {
    $joinArray = array();
    foreach ($joins as $fromStr => $toStr) {
        $from = explode('.', $fromStr);
        $fromModel = $from[0];

        $to = explode('.', $toStr);
        $toModel = $to[0];

        if (!empty($from[1])) {
            $fromCol = $from[1];
        } else {
            $fromCol = Inflector::singularize(Inflector::tableize($toModel)) . '_id';
        }

        if (!empty($to[1])) {
            $toCol = $to[1];
        } else {
            $toCol = 'id';
        }

        $join = array(
            'table' => Inflector::tableize($toModel),
            'alias' => $toModel,
            'type' => $type,
            'conditions' => array(
                "$toModel.$toCol = $fromModel.$fromCol",
            )
        );
        $joinArray[] = $join;
    }

    return $joinArray;
}`}</code></pre>

        <h2>Usage Example</h2>
        <p>
          Here we're joining Suburbs to Postcodes to Subregions to Regions to States - 
          4 joins across 5 tables:
        </p>

        <pre><code>{`// In your Suburbs controller
$joins = $this->Suburb->joinArray(array(
    'Suburb' => 'Postcode',
    'Postcode' => 'Subregion',
    'Subregion' => 'Region',
    'Region' => 'State',
));

$suburbs = $this->Suburb->find('all', array('joins' => $joins));`}</code></pre>

        <h2>Without the Helper Method</h2>
        <p>The same code would look like this - 35 lines instead of 7:</p>

        <pre><code>{`$joins = array(
    array(
        'table' => 'postcodes',
        'alias' => 'Postcode',
        'type' => 'LEFT',
        'conditions' => array(
            'Postcode.id = Suburb.postcode_id',
        )
    ),
    array(
        'table' => 'subregions',
        'alias' => 'Subregion',
        'type' => 'LEFT',
        'conditions' => array(
            'Subregion.id = Postcode.subregion_id',
        )
    ),
    // ... and so on for regions and states
);`}</code></pre>

        <h2>Non-Standard Cases</h2>
        <p>
          When following CakePHP conventions with the foreign key on the left model, 
          only model names are needed. For non-standard cases, use <code>ModelName.col_name</code> notation:
        </p>

        <pre><code>{`array(
    'Suburb.id' => 'Employee.suburb_id',
    'Postcode.custom_col1' => 'Region.custom_col2'
)`}</code></pre>
      </article>
    </main>
  )
}

export default CakephpJoins