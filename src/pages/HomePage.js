import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('title') || '';

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getActiveNotes() });
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState({ notes: getActiveNotes() });
  }

  onKeywordChangeHandler(keyword) {
    this.setState({ keyword });
    this.props.keywordChange(keyword);
  }

  render() {
    // Filter catatan berdasarkan keyword
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <NoteList 
          notes={filteredNotes} 
          onDelete={this.onDeleteHandler} 
          onArchive={this.onArchiveHandler} 
        />
      </section>
    );
  }
}

export default HomePageWrapper;