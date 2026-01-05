import './PostPage.css'

function FilamentAdmin() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Filament - The Laravel Admin Panel That Actually Works</h1>
        <time>Mar 5, 2024</time>

        <p>
          If you're building admin panels with Laravel, stop writing them from scratch. 
          Filament is a game changer.
        </p>

        <h2>What is Filament?</h2>
        <p>
          It's a collection of Laravel packages for building admin panels, forms, 
          tables, and more. Think of it as Laravel's answer to Django Admin, 
          but better.
        </p>

        <h2>Why It's Amazing</h2>
        <ul>
          <li>Full CRUD in minutes, not hours</li>
          <li>Beautiful UI out of the box (Tailwind-based)</li>
          <li>Highly customizable when you need it</li>
          <li>Forms, tables, notifications, widgets - all included</li>
          <li>Active community and great documentation</li>
        </ul>

        <h2>Quick Example</h2>
        <pre><code>{`// Create a resource
php artisan make:filament-resource Post

// Define fields in PostResource.php
public static function form(Form $form): Form
{
    return $form->schema([
        TextInput::make('title')->required(),
        RichEditor::make('content'),
        Select::make('status')
            ->options(['draft' => 'Draft', 'published' => 'Published']),
    ]);
}`}</code></pre>

        <p>
          That's it. You now have a full admin panel for managing posts. 
          Filament handles the rest.
        </p>
      </article>
    </main>
  )
}

export default FilamentAdmin