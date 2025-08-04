using Application.Activities.Commands;
using Application.DTOs;

namespace Application.Activities.Validators;

public class CreateActivityValidator : BaseActivityValidator<CreateActivity.Commands , CreateActivityDto>
{
    public CreateActivityValidator() : base(x => x.ActivityDto)
    {
       
    }
}
