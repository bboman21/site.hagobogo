import React, { useEffect, useMemo, useRef, useState } from 'react';

const MAX_INQUIRY_LENGTH = 3000;

const INITIAL_FORM_VALUES = {
    name: '',
    title: '',
    companyName: '',
    email: '',
    inquiry: '',
};

const FIELD_ORDER = ['name', 'title', 'companyName', 'email', 'inquiry'];

export default function InquiryModal({ copy, onClose }) {
    const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
    const [formErrors, setFormErrors] = useState({});
    const firstInputRef = useRef(null);
    const fieldRefs = useRef({});

    const inquiryLength = formValues.inquiry.length;
    const inquiryCountLabel = useMemo(
        () => `${inquiryLength}/${MAX_INQUIRY_LENGTH}`,
        [inquiryLength]
    );

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        firstInputRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormValues(prev => ({
            ...prev,
            [name]: value,
        }));

        setFormErrors(prev => {
            if (!prev[name]) {
                return prev;
            }

            const nextErrors = { ...prev };
            delete nextErrors[name];
            return nextErrors;
        });
    };

    const handleInputKeyDown = (fieldName) => (event) => {
        if (event.nativeEvent.isComposing) {
            return;
        }

        if (event.key === 'Enter') {
            event.preventDefault();

            const currentIndex = FIELD_ORDER.indexOf(fieldName);
            const nextFieldName = FIELD_ORDER[currentIndex + 1];

            if (!nextFieldName) {
                return;
            }

            fieldRefs.current[nextFieldName]?.focus();
        }
    };

    const validateForm = () => {
        const nextErrors = {};
        const requiredFields = ['name', 'companyName', 'email', 'inquiry'];
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        requiredFields.forEach((fieldName) => {
            if (!formValues[fieldName].trim()) {
                nextErrors[fieldName] = copy.errors.required;
            }
        });

        if (formValues.email.trim() && !emailPattern.test(formValues.email.trim())) {
            nextErrors.email = copy.errors.invalidEmail;
        }

        return nextErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nextErrors = validateForm();
        setFormErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        console.info('Business inquiry saved', formValues);
        onClose();
    };

    return (
        <div className="inquiry-modal-overlay" role="presentation">
            <div
                className="inquiry-modal-card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="business-inquiries-title"
            >
                <form className="inquiry-modal-form" onSubmit={handleSubmit} noValidate>
                    <h2 id="business-inquiries-title" className="inquiry-modal-title">
                        {copy.title}
                    </h2>

                    <div className="inquiry-modal-fields">
                        <div className="inquiry-field-group">
                            <div className="inquiry-field-heading">
                                <label htmlFor="inquiry-name" className="inquiry-field-label">{copy.fields.name}</label>
                                <span className="inquiry-field-warning">{formErrors.name || ''}</span>
                            </div>
                            <input
                                id="inquiry-name"
                                ref={(node) => {
                                    firstInputRef.current = node;
                                    fieldRefs.current.name = node;
                                }}
                                type="text"
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                                onKeyDown={handleInputKeyDown('name')}
                                className={`inquiry-field-input ${formErrors.name ? 'is-error' : ''}`}
                            />
                        </div>

                        <div className="inquiry-field-group">
                            <div className="inquiry-field-heading">
                                <label htmlFor="inquiry-title" className="inquiry-field-label">{copy.fields.title}</label>
                                <span className="inquiry-field-warning">{formErrors.title || ''}</span>
                            </div>
                            <input
                                id="inquiry-title"
                                ref={(node) => {
                                    fieldRefs.current.title = node;
                                }}
                                type="text"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                                onKeyDown={handleInputKeyDown('title')}
                                className={`inquiry-field-input ${formErrors.title ? 'is-error' : ''}`}
                            />
                        </div>

                        <div className="inquiry-field-group">
                            <div className="inquiry-field-heading">
                                <label htmlFor="inquiry-company-name" className="inquiry-field-label">{copy.fields.companyName}</label>
                                <span className="inquiry-field-warning">{formErrors.companyName || ''}</span>
                            </div>
                            <input
                                id="inquiry-company-name"
                                ref={(node) => {
                                    fieldRefs.current.companyName = node;
                                }}
                                type="text"
                                name="companyName"
                                value={formValues.companyName}
                                onChange={handleChange}
                                onKeyDown={handleInputKeyDown('companyName')}
                                className={`inquiry-field-input ${formErrors.companyName ? 'is-error' : ''}`}
                            />
                        </div>

                        <div className="inquiry-field-group">
                            <div className="inquiry-field-heading">
                                <label htmlFor="inquiry-email" className="inquiry-field-label">{copy.fields.email}</label>
                                <span className="inquiry-field-warning">{formErrors.email || ''}</span>
                            </div>
                            <input
                                id="inquiry-email"
                                ref={(node) => {
                                    fieldRefs.current.email = node;
                                }}
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                onKeyDown={handleInputKeyDown('email')}
                                className={`inquiry-field-input ${formErrors.email ? 'is-error' : ''}`}
                            />
                        </div>

                        <div className="inquiry-field-group">
                            <div className="inquiry-field-heading">
                                <label htmlFor="inquiry-content" className="inquiry-field-label">{copy.fields.inquiry}</label>
                                <span className="inquiry-field-warning">{formErrors.inquiry || ''}</span>
                            </div>
                            <textarea
                                id="inquiry-content"
                                ref={(node) => {
                                    fieldRefs.current.inquiry = node;
                                }}
                                name="inquiry"
                                value={formValues.inquiry}
                                onChange={handleChange}
                                maxLength={MAX_INQUIRY_LENGTH}
                                className={`inquiry-field-textarea ${formErrors.inquiry ? 'is-error' : ''}`}
                            />
                            <div className="inquiry-field-footer">
                                <span className="inquiry-field-count">{inquiryCountLabel}</span>
                            </div>
                        </div>
                    </div>

                    <div className="inquiry-modal-actions">
                        <button type="button" className="inquiry-action-button is-cancel" onClick={onClose}>
                            {copy.buttons.cancel}
                        </button>
                        <button type="submit" className="inquiry-action-button is-save">
                            {copy.buttons.save}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
