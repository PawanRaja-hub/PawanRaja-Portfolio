import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const LiveEditor = () => {
  const { data, updateData, resetToDefault, isEditorOpen, setIsEditorOpen } = usePortfolio();
  const [activeTab, setActiveTab] = useState('personal');
  const [rawJson, setRawJson] = useState(JSON.stringify(data, null, 2));
  const [jsonError, setJsonError] = useState('');

  if (!isEditorOpen) return null;

  const handleJsonSave = () => {
    try {
      const parsed = JSON.parse(rawJson);
      updateData(parsed);
      setJsonError('');
      alert('Portfolio details updated successfully!');
    } catch (err) {
      setJsonError('Invalid JSON format: ' + err.message);
    }
  };

  const handleFieldChange = (section, field, value) => {
    const updated = {
      ...data,
      [section]: {
        ...data[section],
        [field]: value,
      },
    };
    updateData(updated);
    setRawJson(JSON.stringify(updated, null, 2));
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          height: '100%',
          background: '#ffffff',
          color: '#212529',
          boxShadow: '-5px 0 30px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '18px 24px',
            background: '#040b14',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #1f2937',
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#fff' }}>
              Portfolio Live Data Storage
            </h3>
            <span style={{ fontSize: '12px', color: '#149ddd' }}>
              Changes reflect immediately on your portfolio
            </span>
          </div>
          <button
            onClick={() => setIsEditorOpen(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            &times;
          </button>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid #e5e7eb',
            background: '#f8fafc',
            overflowX: 'auto',
          }}
        >
          {['personal', 'about', 'resume', 'skills', 'json'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setRawJson(JSON.stringify(data, null, 2));
              }}
              style={{
                padding: '12px 18px',
                border: 'none',
                background: activeTab === tab ? '#ffffff' : 'transparent',
                borderBottom: activeTab === tab ? '2px solid #149ddd' : '2px solid transparent',
                color: activeTab === tab ? '#149ddd' : '#64748b',
                fontWeight: activeTab === tab ? 600 : 500,
                fontSize: '13px',
                textTransform: 'capitalize',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {tab === 'json' ? 'Raw JSON Editor' : tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {activeTab === 'personal' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Display Name (Sitename)
                </label>
                <input
                  type="text"
                  value={data.personal.sitename || ''}
                  onChange={(e) => handleFieldChange('personal', 'sitename', e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Hero Typewriter Roles (comma separated)
                </label>
                <input
                  type="text"
                  value={data.personal.typedItems?.join(', ') || ''}
                  onChange={(e) => {
                    const items = e.target.value.split(',').map((s) => s.trim());
                    handleFieldChange('personal', 'typedItems', items);
                  }}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Profile Photo URL
                </label>
                <input
                  type="text"
                  value={data.personal.avatar || ''}
                  onChange={(e) => handleFieldChange('personal', 'avatar', e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  value={data.personal.socialLinks?.linkedin || ''}
                  onChange={(e) => {
                    const updatedSocial = { ...data.personal.socialLinks, linkedin: e.target.value };
                    handleFieldChange('personal', 'socialLinks', updatedSocial);
                  }}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  GitHub URL
                </label>
                <input
                  type="text"
                  value={data.personal.socialLinks?.github || ''}
                  onChange={(e) => {
                    const updatedSocial = { ...data.personal.socialLinks, github: e.target.value };
                    handleFieldChange('personal', 'socialLinks', updatedSocial);
                  }}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  About Main Heading
                </label>
                <input
                  type="text"
                  value={data.about.heading || ''}
                  onChange={(e) => handleFieldChange('about', 'heading', e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Tagline / Lead Quote
                </label>
                <textarea
                  rows="3"
                  value={data.about.italicText || ''}
                  onChange={(e) => handleFieldChange('about', 'italicText', e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  About Summary Bio
                </label>
                <textarea
                  rows="4"
                  value={data.about.description || ''}
                  onChange={(e) => handleFieldChange('about', 'description', e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>
            </div>
          )}

          {activeTab === 'resume' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Summary Name
                </label>
                <input
                  type="text"
                  value={data.resume.summary?.name || ''}
                  onChange={(e) => {
                    const updated = { ...data.resume.summary, name: e.target.value };
                    handleFieldChange('resume', 'summary', updated);
                  }}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Summary Bio Text
                </label>
                <textarea
                  rows="4"
                  value={data.resume.summary?.text || ''}
                  onChange={(e) => {
                    const updated = { ...data.resume.summary, text: e.target.value };
                    handleFieldChange('resume', 'summary', updated);
                  }}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                Quickly adjust skill levels below or use Raw JSON tab for full customization:
              </p>
              {data.skills?.itemsLeft?.map((skill, idx) => (
                <div key={idx} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600 }}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={skill.level}
                    onChange={(e) => {
                      const newLeft = [...data.skills.itemsLeft];
                      newLeft[idx].level = parseInt(e.target.value);
                      handleFieldChange('skills', 'itemsLeft', newLeft);
                    }}
                    style={{ width: '100%' }}
                  />
                </div>
              ))}
              {data.skills?.itemsRight?.map((skill, idx) => (
                <div key={idx} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600 }}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={skill.level}
                    onChange={(e) => {
                      const newRight = [...data.skills.itemsRight];
                      newRight[idx].level = parseInt(e.target.value);
                      handleFieldChange('skills', 'itemsRight', newRight);
                    }}
                    style={{ width: '100%' }}
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'json' && (
            <div>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '8px' }}>
                You can edit the entire portfolio dataset as JSON. Click <strong>Save JSON</strong> to apply changes.
              </p>
              {jsonError && (
                <div style={{ padding: '8px 12px', background: '#fee2e2', color: '#dc2626', borderRadius: '6px', fontSize: '12px', marginBottom: '12px' }}>
                  {jsonError}
                </div>
              )}
              <textarea
                rows="18"
                value={rawJson}
                onChange={(e) => setRawJson(e.target.value)}
                style={{
                  width: '100%',
                  fontFamily: 'Consolas, monospace',
                  fontSize: '12px',
                  padding: '12px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  background: '#0f172a',
                  color: '#38bdf8',
                  lineHeight: 1.5,
                }}
              />
              <button
                onClick={handleJsonSave}
                style={{
                  marginTop: '12px',
                  width: '100%',
                  padding: '12px',
                  background: '#149ddd',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                Save JSON Changes
              </button>
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid #e5e7eb',
            background: '#f8fafc',
            display: 'flex',
            gap: '12px',
          }}
        >
          <button
            onClick={resetToDefault}
            style={{
              flex: 1,
              padding: '10px',
              background: '#f1f5f9',
              color: '#475569',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            Reset Defaults
          </button>
          <button
            onClick={() => setIsEditorOpen(false)}
            style={{
              flex: 1,
              padding: '10px',
              background: '#149ddd',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            Done Editing
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveEditor;
